import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Trash2, Edit2, Check, X } from 'lucide-react';

const Groceries = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [currency, setCurrency] = useState('TZS'); // Default currency
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editCurrency, setEditCurrency] = useState('USD'); // Currency for editing

  // Track most frequent/most bought item
  useEffect(() => {
    if (items.length > 0) {
      const frequency = {};
      items.forEach((item) => {
        frequency[item.name] = (frequency[item.name] || 0) + 1;
      });
      const mostFrequent = Object.entries(frequency).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.name === mostFrequent ? { ...item, isMostBought: true } : { ...item, isMostBought: false }
        )
      );
    }
  }, [items]);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([
        { name: newItem, price: parseFloat(newPrice) || 0, currency, bought: false, isMostBought: false },
        ...items,
      ]);
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
    setEditCurrency(items[index].currency);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditName('');
    setEditPrice('');
    setEditCurrency('USD');
  };

  const saveEdit = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = {
      ...updatedItems[editIndex],
      name: editName,
      price: parseFloat(editPrice) || 0,
      currency: editCurrency,
    };
    setItems(updatedItems);
    setEditIndex(null);
  };

  const currencyOptions = ['TZS', 'USD', 'EUR', 'GBP', 'KES']; // Add more currencies as needed

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400">
      <div className="w-full max-w-md md:max-w-2xl font-sans">
        <div className="bg-white/25 backdrop-blur rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="flex justify-between items-center p-4 bg-white/45">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Groceries</h2>
            <ShoppingCart className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          <div className="p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
                className="w-full sm:flex-grow px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border-none text-black/30 placeholder-white/80 focus:bg-white/30 focus:outline-none transition-colors"
              />
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                placeholder="Price"
                className="w-full sm:w-20 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border-none text-white placeholder-white/60 focus:bg-white/30 focus:outline-none transition-colors text-center"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full sm:w-20 px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/20 border-none text-white focus:bg-white/30 focus:outline-none transition-colors"
              >
                {currencyOptions.map((curr) => (
                  <option key={curr} value={curr} className="text-black">
                    {curr}
                  </option>
                ))}
              </select>
              <button
                onClick={addItem}
                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-200"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="bg-white/20 p-4 rounded-lg text-center text-white text-sm sm:text-base">
                No items added yet. Start by adding some groceries!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="bg-blue-300 text-white">
                      <th className="border p-2 text-left">Item</th>
                      <th className="border p-2 text-left">Price</th>
                      <th className="border p-2 text-left">Bought</th>
                      <th className="border p-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index} className="border-t hover:bg-white/10">
                        {editIndex === index ? (
                          <td colSpan="4" className="p-2">
                            <div className="flex items-center gap-2">
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
                              <select
                                value={editCurrency}
                                onChange={(e) => setEditCurrency(e.target.value)}
                                className="w-20 px-2 py-1 rounded bg-white/20 text-white"
                              >
                                {currencyOptions.map((curr) => (
                                  <option key={curr} value={curr} className="text-black">
                                    {curr}
                                  </option>
                                ))}
                              </select>
                              <button
                                onClick={saveEdit}
                                className="p-1 text-green-500 hover:scale-110 transition-transform"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="p-1 text-red-500 hover:scale-110 transition-transform"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        ) : (
                          <>
                            <td className={`border p-2 text-white ${item.isMostBought ? 'font-bold text-yellow-300' : ''}`}>
                              {item.name} {item.isMostBought && '(Most Bought)'}
                            </td>
                            <td className="border p-2 text-white">{`${item.price.toFixed(2)} ${item.currency}`}</td>
                            <td className="border p-2 text-center">
                              <input
                                type="checkbox"
                                checked={item.bought}
                                onChange={() => toggleItem(index)}
                                className="text-white"
                              />
                            </td>
                            <td className="border p-2 text-center">
                              <div className="flex gap-2 justify-center">
                                <button
                                  onClick={() => startEdit(index)}
                                  className="p-1 sm:p-2 text-blue-500 hover:scale-110 transition-transform"
                                >
                                  <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                  onClick={() => removeItem(index)}
                                  className="p-1 sm:p-2 text-red-500 hover:scale-110 transition-transform"
                                  >
                                  <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                              </div>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceries;