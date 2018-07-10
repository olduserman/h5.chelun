import Vue from "vue";
import Vuex from "vuex";

import createdLooger from "vuex/dist/logger";
Vue.use(Vuex);

const modulesIndex = {
    state: {
        scrollToItem: "B",
        rightListDialogUrl: null,
        rightListDialogShow: true
    },
    mutations: {
        scrollTos(state, obj) {
            state.scrollToItem = obj.content;
        },
        //获取首页dialog数据
        getRightDialog(state, obj) {
            let time = new Date().getTime();
            state.rightListDialogUrl = `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${obj.MasterID}&_${time}`;
        },
        //是否显示首页右侧栏的dialog框
        rightListDialogShowChange(state, obj) {
            state.rightListDialogShow = obj;
        }
    }
}

const modulesImg = {
    state: {
        SerialID: 0,
        ImageID: 0,
        PageCount: 0,
        ColorID: 0,
        ColorText: "color",
        TypeText: "type",
        CarTypeID: 0
    },
    mutations: {
        changeSerialID: (state, text) => {
            state.SerialID = text;
        },
        changeImageID: (state, text) => {
            state.ImageID = text;
        },
        changePageCount: (state, text) => {
            state.PageCount = text;
        },
        changeColorID: (state, text) => {
            state.ColorID = text;
        },
        changeCarTypeID: (state, text) => {
            state.CarTypeID = text;
        },
        changeClassText: (state, { name, text }) => {
            state[name] = text;
        }
    }
}

const modulesAskMinPrice = {
    state: {
        url: ""
    },
    mutations: {
        changeAskMinPriceUrl: (state, text) => {
            state.url = text;
        }
    }
}

export default new Vuex.Store({
    modules: {
        Index: modulesIndex,
        CarImg: modulesImg,
        AskMinPrice: modulesAskMinPrice
    },
    plugins: [createdLooger()]
})