import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const MealDetail = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  ingredients,
  steps,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>{duration} min</Text>
        <Text>{complexity}</Text>
        <Text>{affordability}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {ingredients.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Steps</Text>
        {steps.map((step, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1, 
    padding: 16 ,
    margin: 10
},
  image: {
     width: "100%",
      height: 200,
       borderRadius: 12,
        marginBottom: 12 },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  title: {
     fontSize: 22,
     fontWeight: "bold",
      textAlign: "center",
       marginBottom: 12 },
  section: { marginBottom: 16 },
  sectionTitle: { 
    fontSize: 18,
     fontWeight: "bold",
      marginBottom: 6 },
  listItem: 
  { fontSize: 16, 
    marginBottom: 6 },
});

export default MealDetail;
