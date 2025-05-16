import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Error,
  Form,
  FormField,
  Header,
  Input,
  Loading,
  Modal,
  Text,
  View,
} from "../components/ui";

export default function ExampleScreen() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Header
        title="Example"
        leftElement={<Avatar size={32} initials="JD" />}
        rightElement={<Badge label="New" variant="primary" />}
      />

      {loading ? (
        <Loading text="Please wait..." />
      ) : error ? (
        <Error message={error} onRetry={() => setError(null)} />
      ) : (
        <Form>
          <FormField label="Email">
            <Input
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </FormField>
          <FormField label="Password">
            <Input placeholder="Enter your password" secureTextEntry />
          </FormField>
          <Button title="Show Modal" onPress={() => setModalVisible(true)} />
        </Form>
      )}

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Example Modal"
      >
        <Text>This is a modal dialog</Text>
      </Modal>
    </View>
  );
}
