document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleNewItemFormSubmit = function(event){
    event.preventDefault();

    const animalItem = createAnimalItem(event.target);
    const animalList = document.querySelector('#animal-list');
    animalList.appendChild(animalItem);

    event.target.reset();
}

const createAnimalItem = function(form){
    const animalItem = document.createElement('li');
    animalItem.classList.add('animal-item');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    animalItem.appendChild(name);

    const species = document.createElement('h4');
    species.textContent = form.species.value;
    animalItem.appendChild(species);

    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    animalItem.appendChild(continent);

    const conservationStatus = document.createElement('p');
    conservationStatus.textContent = form.status.value
    animalItem.appendChild(conservationStatus);

    const habitat = document.createElement('p');
    habitat.textContent = form.habitat.value;
    animalItem.appendChild(habitat);

    return animalItem;

};

const handleDeleteAllClick = function(event){
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
};