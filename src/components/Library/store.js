import { action, decorate, observable } from 'mobx';

export default class CreateLibraryStore {
	plants = [
		{
			name: "Bobson",
			type: "Areca palm",
			frequency: 5
		},
		{
			name: "Todd",
			type: "Cheese plant",
			frequency: 3
		},
		{
			name: "Tiny",
			type: "Monstera",
			frequency: 4
		}
	]
}
decorate(CreateLibraryStore, {
	plants: observable
});