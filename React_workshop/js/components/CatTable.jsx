import React from 'react';
import	{	Router }	from 'react-router';
import {CatRow} from "../components/CatRow.jsx";

export const CatTable =(props)=> {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <CatRow sex="male" cats={props.cats} showLikeKids={props.showLikeKids} searchInputValue={props.searchInputValue}/>
        <CatRow sex="female" cats={props.cats} showLikeKids={props.showLikeKids} searchInputValue={props.searchInputValue}/>
      </table>
    );
}
