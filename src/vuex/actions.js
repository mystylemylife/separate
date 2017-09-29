import * as types from './mutation_types' //所有的输出包裹到types对象里

const actions={
	// 获取底部数据
	 getAllData({ commit }, that) {
        that.$http.get('http://localhost:3000/api/list')
            .then(response => {
                console.log(response)
                commit(types.GET_BOTTOM_DATA, response.data)
            })
            .catch(error => {
                alert('网络错误，不能访问');
            })

    },
}
export default actions
