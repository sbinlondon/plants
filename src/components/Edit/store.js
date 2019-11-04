import { action, decorate, observable } from 'mobx';

export default class CreateEditStore {
	type = '';
	name = 'Bob';
	frequency=5;

    update = (key, value) => {
        this[key] = value;
	};
}
decorate(CreateEditStore, {
	update: action,
	type: observable,
	name: observable,
	frequency: observable
});