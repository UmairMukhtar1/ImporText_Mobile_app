import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import { articles, Images, argonTheme } from "../constants/";
import { Card } from "../components/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Zeeshan Yasin",
    description:
      "Student",
    image:
      "https://scontent.fkhi6-1.fna.fbcdn.net/v/t31.0-8/20121316_493484117650507_3417956119198659012_o.jpg?_nc_cat=104&_nc_sid=174925&_nc_eui2=AeHLWqtygx-nZzGflD72JzV0wiYGIjqo0knCJgYiOqjSSWC_1VgRJT5mcNMDidziuNUhYZR8jtJudErZ5FqgkSjP&_nc_ohc=AECNLhfFL54AX9Mcu9n&_nc_ht=scontent.fkhi6-1.fna&oh=a5d6c0f17f96d41fca40d54793135adc&oe=5F69E1B3",
    // price: "$125"
  },
  {
    title: "Umair Mukhtar",
    description:
      "Student",
    image:
      "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/16265421_1801083943486746_9203155687092583092_n.jpg?_nc_cat=106&_nc_sid=a4a2d7&_nc_eui2=AeEejvyhq91Y-NRY6uhi8O4w5NsC7CLTsRPk2wLsItOxE7io__cObB7VpCnm1871AfQhh0eX39_lJZs7qOBHNcld&_nc_ohc=i0kLjVdChWYAX_N4B_j&_nc_ht=scontent.fkhi6-1.fna&oh=7ac03a9283bd1a6285b6733281cb3a8a&oe=5F6A49EB",
    // price: "$35"
  },
  {
    title: "Inayat ur Rehman",
    description:
      "Supervisor",
    image:
      "https://scontent.fkhi6-1.fna.fbcdn.net/v/t31.0-8/15289128_10154767904914346_7879939808299017113_o.jpg?_nc_cat=101&_nc_sid=a4a2d7&_nc_eui2=AeFaUE1oCNxEEq7OfRFz8Md_ZUzjBSszHS5lTOMFKzMdLjIGgIfxm_-tK3HsU1HJtjOvrcq2NU8BAmrQJulXX_ks&_nc_ohc=W9-RCeTltSYAX8Ns09n&_nc_ht=scontent.fkhi6-1.fna&oh=11446ad11a492df19393fe5d861682a4&oe=5F68D819",
    // price: "$125"
  },
  {
    title: "Saif ur Rehman",
    description:
      "Co-Supervisor",
    image:
      "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/82241880_10157208760358650_4648304707729620992_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_eui2=AeHU7JFTCQzGKQcMBwufPVpNPJNif9iRsZM8k2J_2JGxk2lX3xWNbcgZNllFGgMIf6M54umMgnT4JkSiSAMRjg0Z&_nc_ohc=r0kDR-XB8qEAX9gOzZE&_nc_ht=scontent.fkhi6-1.fna&oh=1301849bfe414598bc7b0b74eb0559fd&oe=5F6BBB16",
    // price: "$35"
  }
];

class Articles extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        // onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Our Team
        </Text>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            {/* <Card item={articles[0]} horizontal />
            <Block flex row>
              <Card
                item={articles[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Card item={articles[2]} />
            </Block>
            <Card item={articles[4]} full /> */}
            {/* <Block flex card shadow style={styles.category}>
              <ImageBackground
                source={{ uri: Images.Products["View article"] }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>
                    View article
                  </Text>
                </Block>
              </ImageBackground>
            </Block> */}
          </Block>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Album
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex right>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Home")}
            >
              View All
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderCards()}
          {/* {this.renderAlbum()} */}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  }
});

export default Articles;
