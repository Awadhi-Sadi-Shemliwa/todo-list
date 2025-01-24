import React, { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Edit2, Check, X } from 'lucide-react';

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
    <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-purple-400/20 to-indigo-600/40">
  <div className="w-full max-w-md md:max-w-2xl font-sans">
    <div className="bg-gradient-to-br from-purple-400/20 to-indigo-600/40 backdrop-blur rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="flex justify-between items-center p-4 bg-white/10">
        <h2 className="text-xl sm:text-2xl font-semibold text-white m-0">Groceries</h2>
        <ShoppingCart className="text-white w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      <div className="p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            className="w-full sm:flex-grow px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border-none text-white placeholder-white/60 focus:bg-white/30 focus:outline-none transition-colors"
          />
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Price"
            className="w-full sm:w-20 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border-none text-white placeholder-white/60 focus:bg-white/30 focus:outline-none transition-colors text-center"
          />
          <button
            onClick={addItem}
            className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-200"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="bg-white/20 p-4 rounded-lg text-center text-white text-sm sm:text-base">
            No items added yet. Start by adding some groceries!
          </div>
        ) : (
          <ul className="space-y-2 sm:space-y-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto scrollbar-hide">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex flex-wrap sm:flex-nowrap justify-between items-center bg-white/10 p-2 sm:p-4 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-white/20 ${
                  item.bought ? 'opacity-60' : ''
                }`}
              >
                {editIndex === index ? (
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="flex-grow px-2 py-1 rounded bg-white/20 text-white"
                    />
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="w-20 px-2 py-1 rounded bg-white/20 text-white"
                    />
                    <button onClick={saveEdit} className="p-1 text-green-500 hover:scale-110 transition-transform">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={cancelEdit} className="p-1 text-red-500 hover:scale-110 transition-transform">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <span
                      onClick={() => toggleItem(index)}
                      className={`text-white cursor-pointer text-sm sm:text-base ${item.bought ? 'line-through' : ''}`}
                    >
                      {item.name} - ${item.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                      <button onClick={() => startEdit(index)} className="p-1 sm:p-2 text-blue-500 hover:scale-110 transition-transform">
                        <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button onClick={() => removeItem(index)} className="p-1 sm:p-2 text-red-500 hover:scale-110 transition-transform">
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
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