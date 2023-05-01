'use strict';
const e = React.createElement;

class Recipe extends React.Component {
    render() {
        return e('section', { id: 'baked-salmon' },
            e('h1', { id: 'recipe-0', 'data-type': 'title' }, 'Baked Salmon'),
            e('ul', { className: 'ingredients' },
                e('li', null, '1 lb Salmon'),
                e('li', null, '1 cup Pine Nuts'),
                e('li', null, '2 cups Butter Lettuce'),
                e('li', null, '1 Yellow Squash'),
                e('li', null, '1/2 cup Olive Oil'),
                e('li', null, '3 cloves of Garlic')
            ),
            e('section', { className: 'instructions' },
                e('h2', null, 'Cooking Instructions'),
                e('p', null, 'Preheat the oven to 350 degrees.'),
                e('p', null, 'Spread the olive oil around a glass baking dish.'),
                e('p', null, 'Add the salmon, garlic, and pine...'),
                e('p', null, 'Bake for 15 minutes.'),
                e('p', null, 'Add the yellow squash and put...'),
                e('p', null, 'Remove from oven and let cool for 15 ....')
            ),
        );
    }
}

ReactDOM.render(e(Recipe), document.getElementById('react-container'));


