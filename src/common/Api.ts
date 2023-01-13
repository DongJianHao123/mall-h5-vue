import axios from 'axios';
import KvStorage from './KvStorage';
import U from './U';
import { Modal, Toast } from 'antd-mobile';
import { createWebHashHistory } from 'vue-router';
import qs from 'qs';
import router from '@/router';

const hashHistory = createWebHashHistory();
const configs = {
    dev: {
        env_node: 'dev',
        apiBase: 'http://101.201.249.16:8888/'
    },
    prod: {
        env_node: 'prod',
        apiBase: 'http://101.201.249.16:8888/'
    }
};

let config = configs['dev'];


axios.defaults.timeout = 10000;

// 请求前拦截
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        // message.error("请求超时");
        return Promise.reject(err);
    }
);
// 返回后拦截
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(err);
    }
);

const Api = {

    myPost: (path: string, params?: Record<string, any>) => {

        params = params || {};
        let url = config.apiBase + path;
        var token = KvStorage.get('user-token');
        if (U.str.isNotEmpty(token)) {
            params['user-token'] = token;
        }
        params['plate'] = 'h5';


        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params)).then((response) => {
                let { data = {} } = response;
                let { result = {}, errcode, errmsg }: any = data;
                if (errcode) {
                    if (errcode === 5) {
                        Modal.confirm({
                            content: '您还未登录，现在登录吗？',
                            onConfirm: async () => {
                                let { location } = window;
                                let { origin } = location;
                                window.location.assign(origin + '/sign/in');
                            },
                            onCancel: () => {
                                window.history.back();
                            },
                            closeOnMaskClick: true,
                        })
                    } else {
                        Toast.show({ content: errmsg, icon: 'fail' })
                    }
                }
                resolve(result);
            }).catch((err = {}) => {
                console.log(err);
                reject(err);
            });
        });
    },

    go: function (hash: string) {
        router.push(hash);
    }
}

export default Api;
