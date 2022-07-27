export const initialState = {
    todos: [{
      id: 1,
      text: "Learn React",
    }, {
      id: 2,
      text: "Learn Redux",
    },
    {
        id: 3,
        text: "Learn TypeScript",
      },
      {
        id: 4,
        text: "Learn Github",
      },
      {
        id: 5,
        text: "Learn JavaScript",
      },
      {
        id: 6,
        text: "Learn Chakra UI",
      },
      {
          id: 7,
          text: "Learn MongoDB",
        },
        {
          id: 8,
          text: "Learn Express",
        },
        {
          id: 10,
          text: "Learn DSA",
        }
],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        {if(action.text){
            const newTodo = {
            
                text: action.text,
              };
              return {
            
                todos: [...state.todos, newTodo],
              };
        }
          
        }
      case "remove":
        {
        
          const todos=state.todos.filter((todo)=>todo.id!==action.id);
          return {
            todos: todos,
          };
        }
      default:
        return state;
    }
  };