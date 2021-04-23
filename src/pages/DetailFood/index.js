import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {ICBackLight, ICCoverProduct} from '../../assets';
import {Button, Counter, Rating} from '../../components/atoms';
import {Icon} from '../../components/molecules';
import {colors} from '../../utils';

const DetailFood = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ICCoverProduct} style={styles.cover}>
                <TouchableOpacity style={styles.btnWrapper}>
                    <ICBackLight style={styles.btnBack} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View>
                    <View style={styles.headingProduct}>
                        <View>
                            <Text style={styles.titleProduct}>
                                Pecel Madiun
                            </Text>
                            <Rating rating={4} />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.paragprah}>
                        Makanan khas Kota Madiun dengan cita rasa yang tinggi
                        dan memiliki khasiat yang baik bagi tubuh karena
                        menggunakan kulupan yang sehat dan segar
                    </Text>
                    <Text style={styles.headingParagraph}>Ingridient: </Text>
                    <Text style={styles.paragprah}>Nasi</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.priceDesc}>
                        <Text style={styles.totalPrice}>Total Price</Text>
                        <Text style={styles.price}>IDR. 56.000</Text>
                    </View>
                    <View style={{width: 160}}>
                        <Button title="Order Now" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default DetailFood;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    cover: {
        width: '100%',
        height: 300,
    },
    btnBack: {
        width: 25,
        height: 25,
    },
    btnWrapper: {
        paddingTop: 24,
        paddingLeft: 16,
    },
    content: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: 'white',
        marginTop: -24,
        paddingVertical: 27,
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    headingProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    titleProduct: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: colors.text.black,
    },
    paragprah: {
        fontFamily: 'Poppins-Regular',
        color: colors.text.gray,
        marginBottom: 16,
    },
    headingParagraph: {
        fontFamily: 'Poppins-Medium',
        color: colors.text.black,
        marginBottom: 4,
    },
    price: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceDesc: {
        flex: 1,
        justifyContent: 'center',
    },
    totalPrice: {
        fontFamily: 'Poppins-Regular',
        color: colors.text.gray,
    },
});
