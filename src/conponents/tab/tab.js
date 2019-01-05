class Tab {
    constructor(config) {
        this.el = "id";
        this.config = config;
        this.init();
    }
    init() {
        console.log("我是组件输出的内容" + this.config.name)
    }

}

export default Tab;