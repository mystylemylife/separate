import Vue from 'vue';
import * as types from './mutation_types' //所有的输出包裹到types对象里


const mutations={
	// 改变底部数据
	[types.GET_BOTTOM_DATA](state,data){
		state.bottom=data
	}
}

export default mutations
