/**
 * jquery导进来的页面
 */
import "./index.css"
import Tab from "../../conponents/tab/tab.js"
@testable
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
function testable(target) {
    target.isTestable = true;
}

console.log(Index.isTestable);

new Index()