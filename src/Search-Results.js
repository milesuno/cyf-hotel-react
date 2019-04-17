import React, {Component} from "react";


const SearchResults = (props) => {
{/* create code needed to remove the hard
 coded data inside of the table. 

 Each booking will have an: id, title, 
first name, surname, email, room id, 
check in date and check out date. 

This code should create a new entry as data
increases instead of hard coding each row and col and row
*/}
    const orderData = {
        firstName: "John",
        lastName: "Marshton",
        email: "johnmarshton@email.com",
        roomID: 6,
        checkIn: new Date().toLocaleDateString(),
        checkOut: new Date().toLocaleDateString()
    };

    const orderDataKeys = Object.keys(orderData);

    const orderDataValues = Object.values(orderData);

    return(
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
            <th scope="col">#</th>
            {orderDataKeys.map((dataKey) => {
                return(
                    <th scope="col">{dataKey}</th>
                )
            })}
            </tr>
          </thead>
          <tbody>
            <tr>
                
              <th scope="row">1</th>
              {orderDataValues.map((dataValue) => {
                    return <td>{dataValue}</td>
                })}

            </tr>
          </tbody>
        </table>
      </div>
    )
  };

  export default SearchResults;