import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  DatePicker,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  ScrollShadow,
  Switch,
  Slider,
  Link,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            width={40}
            radius="full"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          />
          <div className="flex flex-col">
            <p className="text-md">Testing NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-4">
          <DatePicker label="Birth date" variant="bordered" />
          <Button color="secondary" variant="bordered" onPress={onOpen}>
            Open Modal
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
        <div className="p-4 flex gap-2">
          <Chip color="warning" variant="shadow" size="sm">
            Shadow
          </Chip>
          <Chip color="warning" variant="dot" size="sm">
            Dot
          </Chip>
          <Switch defaultSelected aria-label="Automatic updates" size="sm" />
        </div>
        <Divider />
        <div className="p-4">
          <Slider
            size="sm"
            step={0.1}
            color="foreground"
            label="Temperature"
            showSteps={true}
            maxValue={1}
            minValue={0}
            defaultValue={0.2}
          />
        </div>
        <Divider />
        <div className="p-4">
          <Button color="primary" size="sm">
            Button test
          </Button>
        </div>
        <Divider />
        <ScrollShadow className="h-[200px] p-4">
          <p className="mb-4">Scroll Shadow component test</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat
            consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
            incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua
            enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
            esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
            deserunt nostrud ad veniam.
          </p>
        </ScrollShadow>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
