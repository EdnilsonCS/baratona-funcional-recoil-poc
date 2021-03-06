import React from 'react';
import {Appbar} from 'react-native-paper';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';

import {productsState} from '../../../recoil/atoms';
import ProductCard from '../../../components/ProductCard';

const ProductsList = ({navigation}) => {
  const [products] = useRecoilState(productsState);
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: '#001529',
        }}>
        <Appbar.Content title="Gerenciamento" />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('AddProduct')}
        />
      </Appbar.Header>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.title}>Lista de produtos</Text>
          {products?.map(product => (
            <ProductCard
              key={product.id}
              products={products}
              product={product}
              role="admin"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 12},
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
});

export default ProductsList;
