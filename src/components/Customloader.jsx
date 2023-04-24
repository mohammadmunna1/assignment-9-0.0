import { getShoppingCart } from "../Utilities/FackeDB";

  
 const CustomCartLoader = async () => { 
     const loadproducts = await fetch('/data2.json'); 
     const product = await loadproducts.json(); 
  
  
    
  
  
     
     const storedCart = getShoppingCart() ; 
     const savedCart = []; 
                                                        
     for (const id in storedCart) { 
                                                      
         const addedproduct = product.find(prod => prod.id == id); 
         if (addedproduct) { 
                                                    
               
             savedCart.push(addedproduct); 
  
         } 
     } 
  
     return savedCart; 
  
 } 
  
  
  

  
 export default CustomCartLoader;