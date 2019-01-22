import React from 'react'
import {StyleSheet, View, FlatList, Text, SafeAreaView, Image, ActivityIndicator, TextInput} from 'react-native'
import {MovieService} from "../../services";

class MoviesScreens extends React.Component {

    constructor(props) {
        super(props);

        this.initialMovies = [];

        this.state = {
            movies: [],
            loading: false
        }
    }

    _renderItem = ({item}) => {
        return (
            <View>
                <Text
                    style={style.movieItem}
                    key={item.imdbID}> {item.Title}
                </Text>
                <Image style={{width:100, height: 100}} source={{uri:item.Poster}} />
            </View>
    )
    };

    componentDidMount(){
        this.setState({loading: true});
        setTimeout(() => {
            MovieService.fetchMovies((movie) => {
                let movies = [];

                for ( var i = 0; i < 5; i++){
                    movies.push(movie)
                }

                console.log(movies);

                this.setState({loading:false});
                this.setState({movies})
                this.initialMovies = movies
            })
        }, 5000)
    }
    
    onChangeFilter = (input) => {
        let text = input.toLowerCase();
        let movies = this.state.movies;

        let filteredMovies = movies.filter((item) => {
            return item.Title.toLowerCase().match(text);
        })

        if(!text || text === ""){
            this.setState({
                movies: this.initialMovies
            })
        } else if (Array.isArray(filteredMovies)) {
            this.setState({
                movies: filteredMovies
            })
        } else if (!Array.isArray(filteredMovies)){
            this.setState({
                movies: []
            })
        }
    }

    render() {
        return (
            <SafeAreaView style={style.container}>
                <View>
                    <TextInput
                        onChangeText={this.onChangeFilter}
                        placeholder={"Digite o filtro"}
                    />
                    {
                        this.state.loading &&
                        <ActivityIndicator/>
                    }
                    <FlatList
                        data={this.state.movies}
                        renderItem={this._renderItem}/>
                </View>
            </SafeAreaView>
        );
    }
}

    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
            alignItems: 'center'
        },
        movieItem:{
            fontSize: 18,
            color: 'green'
        }
    });

export default MoviesScreens