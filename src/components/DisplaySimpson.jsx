import  React  from  'react';

const  DisplaySimpson = ({ simpson }) => {
    return (
    
        <div  className="DisplaySimpson">
            
            <ul>
             <li>{simpson.character}</li>
                
            <li><img  src={simpson.image}  alt={simpson.alt} /></li>
            
            <li>{simpson.quote}</li>
            </ul>
                
            
        </div>
        
    );
};

export  default  DisplaySimpson;