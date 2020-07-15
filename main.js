// $(document).ready(function(){
//     $(".btn-primary:first").click(function(){
//       $(this).button('toggle');
//     });   
//   });


const app = new Vue ({
    el: '#vue-app1',
    data: {
        recipe: [],
        randomRecipe: {},
    },

    methods: {
        random() {
            const someRecipe = Math.floor(Math.random() * this.recipe.length);
            this.randomRecipe = this.recipe[someRecipe];
            console.log(this.randomRecipe);
        }
    },

    created: function () {
        fetch('recipe2.json')
            .then(response => response.json())
            .then(recipeResp => {
                this.recipe = recipeResp.recipes;
                console.log(recipeResp.recipes)
            })
        //     this.recipe = recipes;
        //     console.log(recipe)
        // }
        
    },
    
})