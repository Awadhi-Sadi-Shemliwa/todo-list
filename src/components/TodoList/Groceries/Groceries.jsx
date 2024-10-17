import React, { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Edit2, Check, X } from 'lucide-react';
import './Groceries.css';

const Groceries = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([{ name: newItem, price: parseFloat(newPrice) || 0, bought: false }, ...items]);
      setNewItem('');
      setNewPrice('');
    }
  };

  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditName(items[index].name);
    setEditPrice(items[index].price.toString());
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditName('');
    setEditPrice('');
  };

  const saveEdit = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = { ...updatedItems[editIndex], name: editName, price: parseFloat(editPrice) || 0 };
    setItems(updatedItems);
    setEditIndex(null);
  };

  return (
    <div className='allgrocery'>
    <div className="groceries-page">
      <div className="groceries-card">
        <header className="groceries-header">
          <h2>Groceries</h2>
          <ShoppingCart className="groceries-icon" size={32} />
        </header>
        <div className="groceries-content">
          <div className="groceries-input">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new item"
            />
            <input
              type="number"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              placeholder="Price"
            />
            <button onClick={addItem} className="add-button">
              <Plus size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <p className="empty-message">No items added yet. Start by adding some groceries!</p>
          ) : (
            <ul className="groceries-list">
              {items.map((item, index) => (
                <li key={index} className={`groceries-item ${item.bought ? 'bought' : ''}`}>
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                      />
                      <button onClick={saveEdit} className="save-button">
                        <Check size={20} />
                      </button>
                      <button onClick={cancelEdit} className="cancel-button">
                        <X size={20} />
                      </button>
                    </>
                  ) : (
                    <>
                      <span onClick={() => toggleItem(index)}>
                        {item.name} - ${item.price.toFixed(2)}
                      </span>
                      <div>
                        <button onClick={() => startEdit(index)} className="edit-button">
                          <Edit2 size={20} />
                        </button>
                        <button onClick={() => removeItem(index)} className="delete-button">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Groceries;
