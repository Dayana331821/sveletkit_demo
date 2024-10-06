

<script lang="ts">
    // Type for each item in the list
    type Item = {
      id: number;
      text: string;
    };
  
    // Array of items with initial data
    let items: Item[] = [
      { id: 1, text: 'Learn TypeScript with Svelte' },
      { id: 2, text: 'Build a Svelte App' }
    ];
  
    // Variable to store the new item input
    let newItem: string = '';
  
    // Function to add a new item to the list
    function addItem() {
      if (newItem.trim() !== '') {
        // Create a new item with a unique ID
        const newItemObject: Item = {
          id: Date.now(), // Use current timestamp as unique ID
          text: newItem
        };
        items = [...items, newItemObject];
        newItem = ''; // Clear input field
      }
    }
  
    // Function to delete an item by its ID
    function deleteItem(id: number) {
      items = items.filter(item => item.id !== id);
    }
  </script>
  
  <style>
    /* Basic styling for the list and buttons */
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  
    button {
      background-color: #f44336;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #d32f2f;
    }
  </style>
  
  <!-- Input and Add Button -->
  <div>
    <input
      type="text"
      bind:value={newItem}
      placeholder="Add new item"
      on:keydown={(e) => { if (e.key === 'Enter') addItem(); }}
    />
    <button on:click={addItem}>Add</button>
  </div>
  
  <!-- List of Items -->
  <ul>
    {#each items as item}
      <li>
        {item.text}
        <button on:click={() => deleteItem(item.id)}>Delete</button>
      </li>
    {/each}
  </ul>
  