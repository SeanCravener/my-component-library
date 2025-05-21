import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FavoriteButton,
  RatingDisplay,
  RatingModal,
  SearchBar,
  StepProgressBar,
  SummaryCardList,
  SummaryCardRectangle,
  SummaryCardSquare,
} from "../components/composite";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Error,
  Icon,
  Image,
  Input,
  ListItem,
  Loading,
  Modal,
  Text,
  Toggle,
  View,
} from "../components/ui";

const sampleImage2 = require("../assets/images/react-logo.png");
const reactLogo = require("../assets/images/react-logo.png");

const articles = [
  {
    id: "1",
    title: "Fluffy Cloud Slime",
    rating: 4.5,
    tags: ["Fluffy", "Scented"],
    image: require("../assets/images/react-logo.png"),
    author: {
      name: "Luna Sparks",
      avatarLabel: "LS",
    },
    isFavorite: true,
  },
  {
    id: "2",
    title: "Glow-in-the-Dark Slime",
    rating: 3.8,
    tags: ["Glowing"],
    image: require("../assets/images/react-logo.png"),
    author: {
      name: "Max Glo",
      avatarLabel: "MG",
    },
    isFavorite: false,
  },
  {
    id: "3",
    title: "Butter Slime Deluxe",
    rating: 4.9,
    tags: ["Butter", "Stretchy"],
    image: require("../assets/images/react-logo.png"),
    author: {
      name: "Ava Butter",
      avatarLabel: "AB",
    },
    isFavorite: false,
  },
];

export default function ExampleScreen() {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorite, setFavorite] = useState(true);
  const [ratingModalVisible, setRatingModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <View
          padding="xl"
          backgroundColor="surfaceContainer"
          style={{ flex: 1 }}
        >
          <Text
            variant="headline"
            fontWeight="bold"
            style={{ marginBottom: 24 }}
          >
            All Components
          </Text>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Button & Input
            </Text>
            <Input
              label="Email"
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="test@example.com"
              style={{ marginBottom: 12 }}
            />
            <Button title="Submit" onPress={() => {}} />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Badge, Avatar & Icon
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
            >
              <Badge label="New" variant="success" />
              <Avatar label="JD" />
              <Icon name="check-circle" color="primary" />
            </View>
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Error & Loading
            </Text>
            <Error
              title="Oops!"
              message="Something went wrong."
              style={{ marginBottom: 12 }}
            />
            <Loading />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Image & Modal
            </Text>
            <Image
              source={reactLogo}
              style={{ width: 80, height: 80, marginBottom: 12 }}
            />
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              ListItem
            </Text>
            <ListItem
              title="Account"
              subtitle="Manage your account"
              icon="user"
            />
            <ListItem title="Security" icon="lock" />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Toggle
            </Text>
            <Toggle
              label="Enable Notifications"
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              color="secondary"
            />
          </Card>
          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Checkbox
            </Text>
            <Checkbox
              checked={termsAccepted}
              onChange={setTermsAccepted}
              label="Accept Terms & Conditions"
              color="tertiary"
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Search Bar
            </Text>
            <SearchBar
              placeholder="Search users..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSearch={(q) => console.log("Search:", q)}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Favorite Button
            </Text>
            <FavoriteButton
              isFavorite={favorite}
              onToggle={setFavorite}
              color="error"
              size={28}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Rating Display
            </Text>

            <View style={{ marginBottom: 12 }}>
              <RatingDisplay value={3} displayType="full" />
            </View>

            <View>
              <RatingDisplay value={4.2} displayType="compact" />
            </View>
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <Text variant="title" fontWeight="bold" style={{ marginBottom: 8 }}>
              Interactive Rating Modal
            </Text>
            <Button
              title="Rate Now"
              onPress={() => setRatingModalVisible(true)}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <SummaryCardSquare
              title="Basic Fluffy Slime Recipe"
              rating={4.8}
              tags={["Fluffy"]}
              image={sampleImage2}
              author={{ name: "Alice Fala", avatarLabel: "AF" }}
              isFavorite={true}
              onToggleFavorite={(val) => console.log("Favorite:", val)}
              onPress={() => console.log("Navigating to detail screen")}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <SummaryCardRectangle
              title="Scented Slime With Essential Oils"
              rating={4.7}
              tags={["Scented", "Oil-based"]}
              image={sampleImage2}
              author={{ name: "Jamie Doe", avatarLabel: "JD" }}
              isFavorite={false}
              onToggleFavorite={(val) => console.log("Favorite:", val)}
              onPress={() => console.log("Navigate to details screen")}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <SummaryCardList
              data={articles}
              layout="rectangle"
              onPressCard={(item) => console.log("Open:", item.title)}
              onToggleFavorite={(item, val) =>
                console.log("Favorite:", item.id, val)
              }
              onEndReached={() => console.log("Load more...")}
              loadingMore={true}
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <SummaryCardList
              data={articles}
              layout="square"
              horizontal
              onPressCard={(item) => console.log("Tapped:", item.title)}
              onToggleFavorite={(item, val) =>
                console.log("Heart changed:", item.title, val)
              }
            />
          </Card>

          <Card style={{ marginBottom: 24 }}>
            <StepProgressBar currentStep={3} totalSteps={6} />
          </Card>
        </View>

        <RatingModal
          visible={ratingModalVisible}
          onClose={() => setRatingModalVisible(false)}
          onSubmit={(value) => {
            setRating(value); // Save user's rating
            console.log("Rated:", value);
          }}
          initialRating={rating}
        />

        <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
          <Text variant="title" fontWeight="bold" style={{ marginBottom: 12 }}>
            Modal Content
          </Text>
          <Text variant="body" style={{ marginBottom: 16 }}>
            This is a themed modal. Tap outside or press below to close.
          </Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
