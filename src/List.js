import React, { Component } from "react";
import MultiSelect from "@kenshooui/react-multi-select";

class List extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 0, label: "user1@db.com" },
        { id: 1, label: "user2@db.com" },
        { id: 2, label: "user3@db.com" },
        { id: 3, label: "user4@db.com" },
        { id: 4, label: "user5@db.com" },
        { id: 5, label: "user6@db.com" },
        { id: 6, label: "user7@db.com" },
        { id: 7, label: "user8@db.com" },
        { id: 8, label: "user9@db.com" },
        { id: 9, label: "user10@db.com" },
        { id: 10, label: "user11@db.com" },
      ],
      selectedItems: []
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <MultiSelect
        items={items}
        selectedItems={selectedItems}
        onChange={this.handleChange}
      />
    );
  }
}

export default List;
