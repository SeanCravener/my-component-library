import React from "react";
import { Button, Card, Image, Input, Text, View } from "../components/ui";

export default function Index() {
  return (
    <View padding="md">
      <View padding="md" backgroundColor="secondary">
        <Text variant="h1" color="primary">
          Hello, World!
        </Text>
      </View>
      <View padding="md" backgroundColor="primary">
        <Button
          title="Click Me"
          variant="primary"
          size="md"
          onPress={() => {
            console.log("Button Pressed");
          }}
        />
      </View>
      <View padding="md" margin="sm" backgroundColor="background">
        <Input
          label="Username"
          placeholder="Enter your username"
          rightElement={<Text>👤</Text>}
        />
      </View>
      <View padding="md" margin="sm" backgroundColor="background">
        <Card>
          <Text variant="body">This is a card component</Text>
        </Card>
      </View>
      <View padding="md" margin="sm" backgroundColor="background">
        <Image
          source={require("../assets/images/react-logo.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
    </View>
  );
}
