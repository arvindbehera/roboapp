import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { 
        return(
            <div>
                { robots.map((_user, i) => {
        return (<Card
            key={i} 
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />);
        }) }
            </div>
        );
    }



export default CardList;



    /* return (
      <div>
        <Card
          id={robots[0].id}
          name={robots[0].name}
          username={robots[0].username}
          email={robots[0].email}
        />
        <Card
          id={robots[1].id}
          name={robots[1].name}
          username={robots[1].username}
          email={robots[1].email}
        />
        <Card
          id={robots[2].id}
          name={robots[2].name}
          username={robots[2].username}
          email={robots[2].email}
        />
        <Card
          id={robots[3].id}
          name={robots[3].name}
          username={robots[3].username}
          email={robots[3].email}
        />
      </div>
    );
} */

