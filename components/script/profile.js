import jsonMenu from '../json/menu.json';
import jsonProj from '../json/proj.json';

export default {
	layout: 'profile',
	data() {
		return {
			Menu: jsonMenu,
			Proj: jsonProj
		}
	},
}