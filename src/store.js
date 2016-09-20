const STORAGE_KEY = 'todos-vuejs'//es6语法 const定义一个常量
export default {
	fetch () {//es6语法 相当于 fetch:function(){}
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save (items) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	}
}