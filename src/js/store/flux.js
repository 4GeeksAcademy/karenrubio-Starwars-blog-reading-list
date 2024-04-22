const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characthers:[],
			characthersLiked:[],
			planets:[],
			planetsLiked:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			favoriteLiked: (charactherName) => {
				const store = getStore();  

				if(store.characthersLiked.includes(charactherName)){
					setStore({characthersLiked: store.characthersLiked.filter((elemento) => elemento != charactherName)})

				}else
				setStore({characthersLiked: [...store.characthersLiked,charactherName]})
			},

			deleteFavorite: (charactherName) => {
				const store = getStore();  
	
					setStore({characthersLiked: store.characthersLiked.filter((elemento) => elemento != charactherName)})

			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://swapi.info/api/people')
				.then((response)=> response.json())
				.then((data)=> setStore({ characthers: data }))

				fetch('https://swapi.info/api/planets')
				.then((response)=> response.json())
				.then((data)=> setStore({ planets: data }))

			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	}
};


export default getState;
