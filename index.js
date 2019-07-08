var recipes = {
  
 TomatoSoup: "Tomatoes and soup"
  
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
 
  return recipes
}
 
const recipe = { eggs: 3 }
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')


function updateObjectWithKeyAndValue(recipes, key, value){
  
 return Object.assign({}, recipes, {[key]:value})
 
};

function deleteFromObjectByKey(recipes, key){
  
  return delete recipes.key
  
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
return delete recipes.obj = key

 
}

