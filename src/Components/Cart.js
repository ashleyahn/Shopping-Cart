import React from 'react';
import 'rbx/index.css';
import Sidebar from "react-sidebar";


const Cart = ({ visibleState, contentState }) => (
    <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={visibleState}
        //onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
);

export default Cart;