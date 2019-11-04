import { action, decorate, observable } from 'mobx';

export default class CreateEditStore {
	constructor (libraryStore) {
		this.libraryStore = libraryStore
	}

	type = '';
	name = 'Bob';
	frequency=1;

	addPlant = () => {
		console.log(this.libraryStore.plants.length)
		this.libraryStore.plants = [...this.libraryStore.plants, { name: this.name, type: this.type, frequency: this.frequency }]
	}

    update = (key, value) => {
        this[key] = value;
	};
}
decorate(CreateEditStore, {
	update: action,
	addPlant: action,
	type: observable,
	name: observable,
	frequency: observable
});