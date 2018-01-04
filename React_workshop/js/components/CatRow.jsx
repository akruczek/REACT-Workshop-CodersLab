import React from 'react';
import	{	Router }	from 'react-router';

// export class CatRow extends React.Component {
export const CatRow =(props)=> {
    return (
      <tbody>
        <tr><td colSpan="2"> {props.sex} </td></tr>
        {props.cats.map(cat => {
          return ((cat.category === props.sex) &&
          ((!props.showLikeKids) || (props.showLikeKids && cat.likesKids)) &&
           ((props.searchInputValue.length === 0) || (props.searchInputValue.length > 0 &&
            cat.name.toUpperCase().indexOf(props.searchInputValue.toUpperCase()) !== -1))) && (
            <tr key={cat.name}>
              <td style={{color: !cat.likesKids ? "red" : "black"}}>{cat.name}</td>
              <td>{cat.age}</td>
            </tr>
          );
        })}
      </tbody>
    );
}
