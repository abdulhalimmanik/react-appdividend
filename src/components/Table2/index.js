import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

class App extends Component {
    state = {
        products: [
            {
                "id": "1",
                "name": "Book",
                "price": "18"
            },
            {
                "id": "2",
                "name": "Mobile",
                "price": "400"
            },
            {
                "id": "3",
                "name": "PC",
                "price": "1000"
            },
            {
                "id": "4",
                "name": "PS4",
                "price": "500"
            },
            {
                "id": "5",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "6",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "7",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "8",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "9",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "10",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "11",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "12",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "13",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "14",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "15",
                "name": "Chromebook",
                "price": "500"
            },
            {
                "id": "16",
                "name": "Chromebook",
                "price": "500"
            }],
        columns: [{
            dataField: 'id',
            text: 'Product ID',
            sort: true
        },
        {
            dataField: 'name',
            text: 'Product Name',
            sort: true,
            filter: textFilter()
        }, {
            dataField: 'price',
            text: 'Product Price',
            sort: true
        }]
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={this.state.products}
                    columns={this.state.columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()} />
            </div>
        );
    }
}

export default App;