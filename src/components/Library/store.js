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

    addMessage = (data) => {
        console.log(data);
        this.messages.push(data);
    };
}
decorate(CreateLibraryStore, {
	update: action,
	plants: observable
});