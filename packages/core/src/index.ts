
/* ----------------------------------------- */
/* -- Component Shared --
/* ------------------------------------------*/
import SharedLabel from './components/Shared/Label.vue'
import SharedIcon from './components/Shared/Icon.vue'
import SharedDescription from './components/Shared/Description.vue'
import SharedSup from './components/Shared/Sup.vue'
import SharedImage from './components/Shared/Image.vue'

export const Shared = {
  Label: SharedLabel,
  Icon: SharedIcon,
  Description: SharedDescription,
  Sup: SharedSup,
  Image: SharedImage,
} as {
  Label: typeof SharedLabel,
  Icon: typeof SharedIcon,
  Description: typeof SharedDescription,
  Sup: typeof SharedSup,
  Image: typeof SharedImage,
}


/* ----------------------------------------- */
/* -- Component Accordion --
/* ------------------------------------------*/
import AccordionRoot from './components/Accordion/Root.vue'
import AccordionContent from './components/Accordion/Content.vue'
import AccordionHeading from './components/Accordion/Heading.vue'
import AccordionItem from './components/Accordion/Item.vue'
import AccordionTrigger from './components/Accordion/Trigger.vue'

export const Accordion = {
  Content: AccordionContent,
  Heading: AccordionHeading,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
} as {
  Content: typeof AccordionContent
  Heading: typeof AccordionHeading
  Item: typeof AccordionItem
  Root: typeof AccordionRoot
  Trigger: typeof AccordionTrigger
}

/* ----------------------------------------- */
/* -- Component Avatar --
/* ------------------------------------------*/
import AvatarRoot from './components/Avatar/Root.vue'
import AvatarCaption from './components/Avatar/Caption.vue'

export const Avatar = {
  Root: AvatarRoot,
  Caption: AvatarCaption
} as {
  Root: typeof AvatarRoot,
  Caption: typeof AvatarCaption,
}

/* ----------------------------------------- */
/* -- Component Card --
/* ------------------------------------------*/
import CardRoot from './components/Card/Root.vue'
import CardHeader from './components/Card/Header.vue'
import CardFooter from './components/Card/Footer.vue'
import CardContent from './components/Card/Content.vue'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Footer: CardFooter,
  Content: CardContent
} as {
  Root: typeof CardRoot,
  Header: typeof CardHeader,
  Footer: typeof CardFooter,
  Content: typeof CardContent
}

/* ----------------------------------------- */
/* -- Component Progress --
/* ------------------------------------------*/
import ProgressRoot from './components/Progress/Root.vue'
import ProgressProgress from './components/Progress/Progress.vue'

export const Progress = {
  Root: ProgressRoot,
  Progress: ProgressProgress,
} as {
  Root: typeof CardRoot,
  Progress: typeof ProgressProgress,
}

/* ----------------------------------------- */
/* -- Component Button --
/* ------------------------------------------*/
import ButtonRoot from './components/Button/Root.vue'

export const Button = {
  Root: ButtonRoot
} as {
  Root: typeof ButtonRoot
}

/* ----------------------------------------- */
/* -- Component Tag --
/* ------------------------------------------*/
import TagRoot from './components/Tag/Root.vue'
import TagTrigger from './components/Tag/Trigger.vue'

export const Tag = {
  Root: TagRoot,
  Trigger: TagTrigger
} as {
  Root: typeof TagRoot,
  Trigger: typeof TagTrigger
}

/* ----------------------------------------- */
/* -- Component Separator --
/* ------------------------------------------*/
import SeparatorRoot from './components/Separator/Root.vue'

export const Separator = {
  Root: SeparatorRoot,
} as {
  Root: typeof SeparatorRoot,
}

/* ----------------------------------------- */
/* -- Component Input --
/* ------------------------------------------*/
import InputRoot from './components/Input/Root.vue'
import InputElement from './components/Input/Element.vue'


export const Input = {
  Root: InputRoot,
  Element: InputElement
} as {
  Root: typeof InputRoot,
  Element: typeof InputElement
}

/* ----------------------------------------- */
/* -- Component Tooltip --
/* ------------------------------------------*/
import TooltipRoot from './components/Tooltip/Root.vue'
import TooltipContent from './components/Tooltip/Content.vue'
import TooltipTrigger from './components/Tooltip/Trigger.vue'
import TooltipTriangle from './components/Tooltip/Triangle.vue'

export const Tooltip = {
  Root: TooltipRoot,
  Content: TooltipContent,
  Trigger: TooltipTrigger,
  Triangle: TooltipTriangle,
} as {
  Root: typeof TooltipRoot,
  Content: typeof TooltipContent,
  Trigger: typeof TooltipTrigger,
  Triangle: typeof TooltipTriangle,
}

/* ----------------------------------------- */
/* -- Component Toast --
/* ------------------------------------------*/
import ToastRoot from './components/Toast/Root.vue'
import ToastContent from './components/Toast/Content.vue'
import ToastHeading from './components/Toast/Heading.vue'

export const Toast = {
  Root: ToastRoot,
  Content: ToastContent,
  Heading: ToastHeading,
} as {
  Root: typeof ToastRoot,
  Content: typeof ToastContent,
  Heading: typeof ToastHeading,
}

/* ----------------------------------------- */
/* -- Component Alert --
/* ------------------------------------------*/
import AlertRoot from './components/Alert/Root.vue'
import AlertContent from './components/Alert/Content.vue'
import AlertHeading from './components/Alert/Heading.vue'

export const Alert = {
  Root: AlertRoot,
  Content: AlertContent,
  Heading: AlertHeading,
} as {
  Root: typeof AlertRoot,
  Content: typeof AlertContent,
  Heading: typeof AlertHeading,
}

/* ----------------------------------------- */
/* -- Component Tabs --
/* ------------------------------------------*/
import TabsRoot from './components/Tabs/Root.vue'
import TabsTrigger from './components/Tabs/Trigger.vue'
import TabsContent from './components/Tabs/Content.vue'

export const Tabs = {
  Root: TabsRoot,
  Trigger: TabsTrigger,
  Content: TabsContent,
} as {
  Root: typeof TabsRoot,
  Trigger: typeof TabsTrigger,
  Content: typeof TabsContent,
}

/* ----------------------------------------- */
/* -- Component Tabs --
/* ------------------------------------------*/
import SwitchRoot from './components/Switch/Root.vue'
import SwitchThumb from './components/Switch/Thumb.vue'
import SwitchTrigger from './components/Switch/Trigger.vue'

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
  Trigger: SwitchTrigger,
} as {
  Root: typeof SwitchRoot,
  Thumb: typeof SwitchThumb,
  Trigger: typeof SwitchTrigger,
}

/* ----------------------------------------- */
/* -- Component Collapse --
/* ------------------------------------------*/
import CollapseRoot from './components/Collapse/Root.vue'
import CollapseContent from './components/Collapse/Content.vue'
import CollapseTrigger from './components/Collapse/Trigger.vue'

export const Collapse = {
  Root: CollapseRoot,
  Content: CollapseContent,
  Trigger: CollapseTrigger,
} as {
  Root: typeof CollapseRoot,
  Content: typeof CollapseContent,
  Trigger: typeof CollapseTrigger,
}

/* ----------------------------------------- */
/* -- Component Checkbox --
/* ------------------------------------------*/
import CheckboxRoot from './components/Checkbox/Root.vue'
import CheckboxTrigger from './components/Checkbox/Trigger.vue'

export const Checkbox = {
  Root: CheckboxRoot,
  Trigger: CheckboxTrigger,
} as {
  Root: typeof CheckboxRoot,
  Trigger: typeof CheckboxTrigger,
}

/* ----------------------------------------- */
/* -- Component Badge --
/* ------------------------------------------*/
import BadgeRoot from './components/Badge/Root.vue'

export const Badge = {
  Root: BadgeRoot,
} as {
  Root: typeof BadgeRoot,
}

/* ----------------------------------------- */
/* -- Component Drawer --
/* ------------------------------------------*/
import DrawerRoot from './components/Drawer/Root.vue'
import DrawerContent from './components/Drawer/Content.vue'
import DrawerTrigger from './components/Drawer/Trigger.vue'
import DrawerOverlayer from './components/Drawer/Overlayer.vue'
import DrawerPanel from './components/Drawer/Panel.vue'
import DrawerHeading from './components/Drawer/Heading.vue'
import DrawerFooter from './components/Drawer/Footer.vue'

export const Drawer = {
  Root: DrawerRoot,
  Content: DrawerContent,
  Trigger: DrawerTrigger,
  Overlayer: DrawerOverlayer,
  Panel: DrawerPanel,
  Heading: DrawerHeading,
  Footer: DrawerFooter,
} as {
  Root: typeof DrawerRoot,
  Content: typeof DrawerContent,
  Trigger: typeof DrawerTrigger,
  Overlayer: typeof DrawerOverlayer,
  Panel: typeof DrawerPanel,
  Heading: typeof DrawerHeading,
  Footer: typeof DrawerFooter,
}

/* ----------------------------------------- */
/* -- Component Dialog --
/* ------------------------------------------*/
import DialogRoot from './components/Dialog/Root.vue'
import DialogContent from './components/Dialog/Content.vue'
import DialogTrigger from './components/Dialog/Trigger.vue'
import DialogOverlayer from './components/Dialog/Overlayer.vue'
import DialogPanel from './components/Dialog/Panel.vue'
import DialogHeading from './components/Dialog/Heading.vue'
import DialogFooter from './components/Dialog/Footer.vue'

export const Dialog = {
  Root: DialogRoot,
  Content: DialogContent,
  Trigger: DialogTrigger,
  Overlayer: DialogOverlayer,
  Panel: DialogPanel,
  Heading: DialogHeading,
  Footer: DialogFooter,
} as {
  Root: typeof DialogRoot,
  Content: typeof DialogContent,
  Trigger: typeof DialogTrigger,
  Overlayer: typeof DialogOverlayer,
  Panel: typeof DialogPanel,
  Heading: typeof DialogHeading,
  Footer: typeof DialogFooter,
}

/* ----------------------------------------- */
/* -- Component ListBox --
/* ------------------------------------------*/
import ListBoxRoot from './components/ListBox/Root.vue'
import ListBoxTrigger from './components/ListBox/Trigger.vue'

export const ListBox = {
  Root: ListBoxRoot,
  Trigger: ListBoxTrigger,
} as {
  Root: typeof ListBoxRoot,
  Trigger: typeof ListBoxTrigger,
}

/* ----------------------------------------- */
/* -- Component TextWrapper --
/* ------------------------------------------*/
import TextWrapperRoot from './components/TextWrapper/Root.vue'
import TextWrapperTrigger from './components/TextWrapper/Trigger.vue'
import TextWrapperContent from './components/TextWrapper/Content.vue'

export const TextWrapper = {
  Root: TextWrapperRoot,
  Trigger: TextWrapperTrigger,
  Content: TextWrapperContent,
} as {
  Root: typeof TextWrapperRoot,
  Trigger: typeof TextWrapperTrigger,
  Content: typeof TextWrapperContent,
}

/* ----------------------------------------- */
/* -- Component LoadList --
/* ------------------------------------------*/
import LoadListRoot from './components/LoadList/Root.vue'
import LoadListEmpty from './components/LoadList/Empty.vue'
import LoadListTrigger from './components/LoadList/Trigger.vue'
import LoadListPending from './components/LoadList/Pending.vue'

export const LoadList = {
  Root: LoadListRoot,
  Empty: LoadListEmpty,
  Pending: LoadListPending,
  Trigger: LoadListTrigger,
} as {
  Root: typeof LoadListRoot,
  Empty: typeof LoadListEmpty,
  Pending: typeof LoadListPending,
  Trigger: typeof LoadListTrigger,
}