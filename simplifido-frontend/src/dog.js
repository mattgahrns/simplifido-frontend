import React from 'react';

class Dog extends React.Component {

    getDogs = () => {
        if(this.props.dogs.dogs){
            return this.props.dogs.dogs.map(dog => {
                return(
                    <div key={dog.id}>
                        <p><strong>{dog.name}</strong> | Breed: {dog.breed} | Age: {dog.age}</p>
                    </div>
                )
            })
        }
        
    }

    render(){
        return(
            <div>
                {this.getDogs()}
            </div>
        );
    }
}

export default Dog;