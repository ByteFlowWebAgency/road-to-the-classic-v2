import {
  Button,
  Typography,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Link,
  Section,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui';

export default function ComponentsPage() {
  return (
    <>
      <Section>
        <Heading1 color="primary" className="mb-8">Road to the Classic Component Library</Heading1>
        <Paragraph className="max-w-2xl mb-12">
          This page showcases all the reusable UI components available in the design system.
          The color scheme is based on our primary color #1a237e (deep blue) and secondary color #ffffff (white),
          with black (#000000) as the accent color.
        </Paragraph>
<<<<<<< HEAD
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
        {/* Color Palette */}
        <Heading2 color="primary" className="mb-6 mt-12">Color Palette</Heading2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" />
        <div className="flex flex-col">
          <div className="h-20 bg-[#1a237e] rounded-md" />
          <p className="text-sm mt-2 font-medium">Primary: #1a237e</p>
        </div>
        <div className="flex flex-col">
          <div className="h-20 bg-[#303f9f] rounded-md" />
          <p className="text-sm mt-2 font-medium">Primary Light: #303f9f</p>
        </div>
        <div className="flex flex-col">
          <div className="h-20 bg-white border border-gray-200 rounded-md" />
          <p className="text-sm mt-2 font-medium">Secondary: #ffffff</p>
        </div>
        <div className="flex flex-col">
          <div className="h-20 bg-[#000000] rounded-md">
            <p className="text-sm mt-2 font-medium">Accent: #000000</p>
          </div>
        </div>

        {/* Typography Examples */}
        <Heading2 color="primary" className="mb-6 mt-12">Typography</Heading2>
        <div className="space-y-4 mb-12">
          <Heading1 color="primary-light">Heading 1</Heading1>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Paragraph>Paragraph text looks like this. It should be used for the main content on the page.</Paragraph>
          <Typography variant="small">Small text is used for less important information.</Typography>
          <Typography variant="subtle">Subtle text is used for secondary information.</Typography>
          <Typography variant="label">Label text is used for form labels and small headings.</Typography>
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
          <div className="mt-4 space-y-2">
            <Typography color="primary">Primary Text (#1a237e)</Typography>
            <Typography color="secondary" className="bg-[#1a237e] inline-block px-2 py-1 rounded">Secondary Text (white)</Typography>
            <Typography color="muted">Muted Text</Typography>
            <div className="bg-[#1a237e] p-2 inline-block mt-2 rounded">
              <Typography color="white">White Text on Primary</Typography>
            </div>
            <div className="bg-[#000000] p-2 inline-block mt-2 rounded">
              <Typography color="white">White Text on Accent</Typography>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
        {/* Button Examples */}
        <Heading2 color="primary" className="mb-6 mt-12">Buttons</Heading2>
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
          <div className="flex flex-wrap gap-4">
            <Button size="sm" variant="primary">Small</Button>
            <Button size="md" variant="primary">Medium</Button>
            <Button size="lg" variant="primary">Large</Button>
            <Button size="xl" variant="primary">Extra Large</Button>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
          <div className="space-y-4">
            <Button disabled variant="primary">Disabled Button</Button>
            <div className="w-full border border-gray-200 rounded-md">
              <Button size="fullWidth" variant="primary">Full Width Button</Button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
        {/* Link Examples */}
        <Heading2 color="primary" className="mb-6 mt-12">Links</Heading2>
        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap gap-6">
            <Link href="#" variant="default">Default Link</Link>
            <Link href="#" variant="subtle">Subtle Link</Link>
            <Link href="#" variant="nav">Navigation Link</Link>
            <Link href="#" variant="footer">Footer Link</Link>
            <Link href="#" variant="accent">Accent Link</Link>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="#" variant="button">Button Link</Link>
            <Link href="#" variant="buttonOutline">Button Outline Link</Link>
            <Link href="#" variant="buttonAccent">Button Accent Link</Link>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
          <div className="mt-4">
            <Link href="https://example.com" external>External Link</Link>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
        {/* Card Examples */}
        <Heading2 color="primary" className="mb-6 mt-12">Cards</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card. It can contain any type of content.</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <img
              src="https://via.placeholder.com/400x225"
              alt="Example"
              className="w-full h-[225px] object-cover"
            />
            <CardContent>
              <CardTitle className="mb-2">Card With Image</CardTitle>
              <p>This card has an image at the top.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardContent className="flex-1">
              <CardTitle className="mb-4">Simple Card</CardTitle>
              <p>This is a simpler card with just content and no header or footer.</p>
            </CardContent>
          </Card>
        </div>

        {/* Section Examples */}
        <Heading2 color="primary" className="mb-6 mt-12">Sections</Heading2>
      </Section>

      <Section background="primary">
        <Heading3 className="mb-4">Primary Background Section</Heading3>
        <Paragraph>This section uses the primary background color (#1a237e).</Paragraph>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="accent">Accent Button</Button>
        </div>
      </Section>
<<<<<<< HEAD
<<<<<<< HEAD
      
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
      <Section background="accent">
        <Heading3 className="mb-4">Accent Background Section</Heading3>
        <Paragraph>This section uses the accent background color (#000000).</Paragraph>
        <Button variant="primary" className="mt-4">Primary Button</Button>
      </Section>
<<<<<<< HEAD
<<<<<<< HEAD
      
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
      <Section background="secondary">
        <Heading3 className="mb-4" color="primary">Secondary Background Section</Heading3>
        <Paragraph>This section uses the secondary background color (white).</Paragraph>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button variant="primary" className="mt-4">Primary Button</Button>
          <Button variant="accent" className="mt-4">Accent Button</Button>
        </div>
      </Section>
<<<<<<< HEAD
<<<<<<< HEAD
      
=======

>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
      <Section background="dark">
        <Heading3 className="mb-4 text-white">Dark Background Section</Heading3>
        <Paragraph className="text-white">This section uses the dark background color.</Paragraph>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button variant="secondary" className="mt-4">Secondary Button</Button>
          <Button variant="accent" className="mt-4">Accent Button</Button>
        </div>
      </Section>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
} 
=======

  );

}
>>>>>>> 71d6ceef00fa3b4b3f39f59c88f30275fb3add89
=======

  );

}
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
