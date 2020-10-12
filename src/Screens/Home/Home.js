/* Libraries */
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, Platform, ScrollView, Dimensions, TextInput, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// ICONS IMPORT
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// THEME IMPORT
import * as theme from '../../Constants/theme';
import {color} from 'react-native-reanimated';

// CONSTANTS
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '12 OCTOBER 2020',
            user: {
                name: 'John Doe',
            },
            selectedCategory: 0,
            categories: ['All Topics', 'Technology', 'Design', 'UI/UX'],
            posts: [
                {
                    id: 1,
                    topic: 'Freelance',
                    title: 'The Freelance And The Entrepreneur',
                    image:
                        'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=goran-ivos-iacpoKgpBAM-unsplash.jpg&w=640',
                    likes: 123,
                    author: 'Seth Godin',
                    minsRead: 5,
                },
                {
                    id: 2,
                    topic: 'Art',
                    title: 'Buying The Most Precious Artwork',
                    image:
                        'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mr-tt-xb0wLfZH9Zo-unsplash.jpg&w=640',
                    likes: 212,
                    author: 'Mary Jane',
                    minsRead: 25,
                },
                {
                    id: 3,
                    topic: 'Freelance',
                    title: 'The Freelance And The Entrepreneur',
                    image:
                        'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=goran-ivos-iacpoKgpBAM-unsplash.jpg&w=640',
                    likes: 123,
                    author: 'Seth Godin',
                    minsRead: 5,
                },
                {
                    id: 4,
                    topic: 'Art',
                    title: 'Buying The Most Precious Artwork',
                    image:
                        'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mr-tt-xb0wLfZH9Zo-unsplash.jpg&w=640',
                    likes: 212,
                    author: 'Mary Jane',
                    minsRead: 25,
                },
            ],
        };
    }

    static navigationOptions = {
        headerShown: false,
    };

    // LIFECYCLE METHODS
    componentDidMount = () => {};
    // END LIFECYCLE METHODS

    // UTILITY FUNCTIONS
    // END UTILITY FUNCTIONS

    // FUNCTIONAL COMPONENTS
    // END FUNCTIONAL COMPONENTS

    // RENDERING FUNCTIONS
    renderItem = ({item, index}) => {
        return (
            <ImageBackground
                source={{uri: item.image}}
                resizeMode={'cover'}
                style={{
                    width: EStyleSheet.value(`${WIDTH / 1.6}rem`),
                    aspectRatio: 0.8,
                    borderRadius: EStyleSheet.value('25rem'),
                    marginRight: EStyleSheet.value('10rem'),
                    overflow: 'hidden',
                    justifyContent: 'flex-end',
                    padding: EStyleSheet.value('10rem'),
                }}>
                <View
                    style={{width: '100%', height: '50%', backgroundColor: 'white', borderRadius: EStyleSheet.value('20rem'), padding: theme.appDims.boundary}}>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: EStyleSheet.value('12rem'), color: 'salmon', fontWeight: 'bold'}}>{item.topic.toUpperCase()}</Text>
                        <View
                            style={{
                                padding: EStyleSheet.value('5rem'),
                                backgroundColor: '#f8f8f8',
                                borderRadius: EStyleSheet.value('10rem'),
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text style={{fontSize: EStyleSheet.value('10rem'), color: 'black', marginRight: EStyleSheet.value('3rem')}}>{item.likes}</Text>
                            <MaterialCommunityIcons name={'heart'} color={'black'} size={EStyleSheet.value('14rem')} />
                        </View>
                    </View>
                    <Text style={{fontSize: EStyleSheet.value('16rem'), color: 'black', fontWeight: 'bold', marginTop: EStyleSheet.value('5rem')}}>
                        {item.title}
                    </Text>

                    {/* SEPARATOR */}
                    <View
                        style={{width: '100%', height: EStyleSheet.value('0.3rem'), backgroundColor: 'lightgrey', marginVertical: EStyleSheet.value('14rem')}}
                    />

                    {/* POST INFO */}
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: EStyleSheet.value('12rem'), color: 'lightgrey', fontWeight: 'bold'}}>By {item.author}</Text>
                        <Text style={{fontSize: EStyleSheet.value('12rem'), color: 'lightgrey', fontWeight: 'bold'}}>{item.minsRead}min Read</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1}}>
                    {/* HEADER */}
                    <View style={{width: '100%', padding: theme.appDims.boundary, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <MaterialCommunityIcons name={'menu'} color={'grey'} size={EStyleSheet.value('25rem')} />
                        <Feather name={'search'} color={'grey'} size={EStyleSheet.value('22rem')} />
                    </View>

                    {/* INFO */}
                    <View style={{width: '100%', padding: theme.appDims.boundary}}>
                        <Text style={{fontSize: EStyleSheet.value('10rem'), color: 'grey'}}>{this.state.date}</Text>
                        <Text style={{fontSize: EStyleSheet.value('20rem'), color: 'black', fontWeight: 'bold', marginTop: EStyleSheet.value('5rem')}}>
                            {this.state.user.name}
                        </Text>
                    </View>

                    {/* CATEGORIES */}
                    <View style={{width: '100%'}}>
                        <ScrollView horizontal contentContainerStyle={{paddingHorizontal: theme.appDims.boundary}} showsHorizontalScrollIndicator={false}>
                            {this.state.categories.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index.toString()}
                                        style={{
                                            ...styles.totalCenter,
                                            paddingHorizontal: EStyleSheet.value('16rem'),
                                            height: EStyleSheet.value('45rem'),
                                            borderRadius: EStyleSheet.value('15rem'),
                                            backgroundColor: this.state.selectedCategory == index ? 'black' : '#f8f8f8',
                                            marginRight: EStyleSheet.value('10rem'),
                                        }}
                                        onPress={() => this.setState({selectedCategory: index})}>
                                        <Text
                                            style={{
                                                fontSize: EStyleSheet.value('18rem'),
                                                color: this.state.selectedCategory == index ? 'white' : 'black',
                                                fontWeight: '600',
                                            }}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>

                    {/* POSTS */}
                    <View style={{width: '100%', marginTop: EStyleSheet.value('25rem')}}>
                        <Text style={{fontSize: EStyleSheet.value('20rem'), color: 'black', fontWeight: 'bold', marginLeft: theme.appDims.boundary}}>
                            Popular
                        </Text>
                        <FlatList
                            data={this.state.posts}
                            renderItem={this.renderItem}
                            extraData={({id}) => id.toString()}
                            contentContainerStyle={{paddingHorizontal: theme.appDims.boundary, paddingTop: theme.appDims.boundary}}
                            snapToInterval={EStyleSheet.value(`${WIDTH / 1.6}rem`)}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    </View>

                    {/* ADD POST BUTTON */}
                    <TouchableOpacity
                        style={{
                            ...styles.totalCenter,
                            height: EStyleSheet.value('60rem'),
                            aspectRatio: 1,
                            borderRadius: EStyleSheet.value('40rem'),
                            backgroundColor: 'lightgrey',
                            position: 'absolute',
                            bottom: EStyleSheet.value('40rem'),
                            alignSelf: 'center',
                        }}>
                        <View
                            style={{
                                ...styles.totalCenter,
                                height: EStyleSheet.value('50rem'),
                                aspectRatio: 1,
                                borderRadius: EStyleSheet.value('40rem'),
                                backgroundColor: 'black',
                            }}>
                            <MaterialIcons name={'add'} color={'white'} size={EStyleSheet.value('25rem')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
    // END RENDERING FUNCTIONS
}

const styles = EStyleSheet.create({
    totalCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
