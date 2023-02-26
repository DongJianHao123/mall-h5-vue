import { ConfigProvider } from 'ant-design-vue';
import { createApp, h } from 'vue'
import { KvStorage } from ".";
import CTYPE from "./CTYPE";
import zhCN from 'ant-design-vue/lib/locale/zh_CN';


const deliveryTypes = [{ type: 1, value: '送货上门' }, { type: 2, value: '上门自取' }];

const Utils = {

    homePage: {
        getTitleMoreByUIKey: (key: string) => {
            return CTYPE.homeItem.homeItemTitles.find(item => item.key === key)
        }
    },
    user: {
        hasToken: () => {
            return KvStorage.get('user-token');
        },
        logout: () => {
            KvStorage.remove('user-token');
            KvStorage.remove('user-sess');
        }
    },
    order: {
        getDeliveryType: (type: number) => {
            let _deliveryType = deliveryTypes.find((item: any) => item.type === type);
            return _deliveryType?.value;
        }
    },
    common: {
        renderVueDOM: (child: any, options = {}) => {

            let div = document.createElement('div');
            let { id }: any = options;
            if (id) {
                let e = document.getElementById(id);
                if (e) {
                    document.body.removeChild(e);
                }
                div.setAttribute('id', id);
            }

            document.body.appendChild(div);
            const instance = createApp(
                h(ConfigProvider, {
                    locale: zhCN,
                }, child)
            )
            instance.mount('#'+id);
            // root.render(<ConfigProvider locale={ zhCN } > { child } < /ConfigProvider>);

        },
        closeModalContainer: (id: string) => {
            let e = document.getElementById(id);
            if (e) {
                document.body.removeChild(e);
            }
        },  
        createModalContainer: (id: string) => {
            //强制清理同名div，render会重复创建modal
            Utils.common.closeModalContainer(id);
            let div = document.createElement('div');
            div.setAttribute('id', id);
            document.body.appendChild(div);
            return div;
        },
        showImgLightbox: (images: Array<string>, index: number) => {
            Utils.common.renderVueDOM(h("h1",{class:"h1"},"这是renderVueDom"),{id:"test"});
        }
    }



}

export default Utils