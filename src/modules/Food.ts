// 定义Food类   
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其复制给element;
        this.element = document.getElementById('food')!;
    }

    // 获取食物X轴坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        // 生成一个随机的位置
        // 食物位置最小0, 最大290
        // 蛇移动一次就是一格, 一个大小为10, 要求随机位置为整10
        const left = Math.floor(Math.random() * 30) * 10;
        const top = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}

export default Food;