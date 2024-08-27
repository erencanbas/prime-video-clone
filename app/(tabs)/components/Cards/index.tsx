import { TouchableOpacity, Image, StyleSheet } from "react-native"


export const MovieCard = (props: any) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.moviesURL} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginLeft: 20,

    }
})