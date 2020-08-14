import json from '../json/menu.json';

export default {
	layout: 'profile',
	data() {
		return {
			jsonData: json,
			private: true
		}
	},
}