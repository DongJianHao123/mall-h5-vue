import CTYPE from "./CTYPE";

const Utils = {

    homePage: {
        getTitleMoreByUIKey: (key: string) => {
            return CTYPE.homeItem.homeItemTitles.find(item => item.key === key)
        }
    }

}

export default Utils