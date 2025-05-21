import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../components/composite/SearchBar/SearchBar";
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

const reactLogo = require("../assets/images/react-logo.png");

export default function ExampleScreen() {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
        </View>

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
