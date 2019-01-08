/**
 * jquery导进来的页面
 */
import "./index.css"
import Tab from "../../conponents/tab/tab.js"
class Index {
    constructor() {
        this.id = 123;
        this.name = "hello word";
        this.init();
    }
    init() {
        //document.getElementsByClassName("demo")[0].innerHTML = this.name
        $(".demo").html(this.name);
        new Tab({
            id: "2222",
            name: "xxx11"
        })
    }
}

new Index()