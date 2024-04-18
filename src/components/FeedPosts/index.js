import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native";

export default function FeedPosts(props) {

    const screenWidth = Dimensions.get('window').width;

    function checkLiked(liked) {
        return liked ? require('../../img/base/liked.png') :
        require('../../img/base/like.png')
    }

    function showLikes(likes) {
        if (likes === 0) {
            return;
        } 

        return(
            <Text style={styles.likes}>{likes} {likes > 1 ? 'likes' : 'like'} </Text>
        )
    }

    function showComments(comments) {
        if (comments === 0) {
            return;
        }

        return(
            <Text style={styles.comments}>{comments > 1 ? `View all ${comments} comments` : `${comments} comment`}</Text>
        )
    }


    return(
        <View style={{backgroundColor: '#FFF'}}>

            <View style={styles.viewProfile}>
                <Image
                source={{uri: props.data.imgProfile}}
                style={styles.profileImg}
                />
                
                <Text style={styles.userName} >{props.data.name}</Text>
            </View>

            <View style={styles.publiView}>
                <Image 
                source={props.data.imgPubli} 
                style={styles.publicationImg}
                resizeMode="cover"
                />
            </View>

            <View style={styles.social}>

                <View style={styles.buttons}>
                    <View style={styles.socialBtnView} >
                        <TouchableOpacity>
                            <Image 
                            source={checkLiked(props.data.liked)}
                            style={styles.socialBtn}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../img/base/comment.png')}
                            style={styles.socialBtn}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                            source={require('../../img/base/share.png')}
                            style={styles.socialBtn}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.socialBtnView} >
                        <TouchableOpacity>
                            <Image 
                            source={require('../../img/base/mark.png')}
                            style={{ width: 24, height: 24 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    {showLikes(props.data.likes)}
                </View>

                <View style={styles.description} >
                    <Text style={styles.textDescritpion} > 
                        <Text style={styles.userDescription} >{props.data.name}</Text> {props.data.description}
                    </Text> 
                </View>

                <View>
                    {showComments(props.data.comments)}
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    viewProfile: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 12
    },
    profileImg: {
        width: 35,
        height: 35,
        borderRadius: 35/2
    },
    userName: {
        paddingLeft: 5,
        fontSize: 14,
        fontWeight: '500',
        color: '#000'
    },
    publiView: { 
        height: 400 
    },
    publicationImg: {
        flex: 1,
        height: undefined,
        width: undefined,
        alignItems: 'center',
    },
    social: {
        padding: 12
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialBtnView: {
        flexDirection: 'row'
    },
    socialBtn: {
        width: 24,
        height: 24,
        marginRight: 16
    },
    likes: {
        marginTop: 8,
        color: '#000',
        fontWeight: '500'
    },
    description: {
        flex: 1,
        flexDirection: 'row',
        width: 360,
    },
    userDescription: {
        fontWeight: '500',
    },
    textDescritpion: {
        color: '#000'
    }
})