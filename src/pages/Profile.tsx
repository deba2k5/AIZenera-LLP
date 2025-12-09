import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Save, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/context/UserContext";

const Profile = () => {
  const { toast } = useToast();
  const { user, updateUser } = useUser();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string | null>(user?.avatarDataUrl || null);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        college: user.college || "",
        course: user.course || "",
        year: user.year || "",
        bio: user.bio || "",
      });
      setAvatar(user.avatarDataUrl || null);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      ...profile,
      avatarDataUrl: avatar,
    });
    toast({
      title: "Profile Updated!",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAvatar(result);
      toast({ title: "Avatar selected", description: "Click Save to update your profile." });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Edit Profile</h1>
          <p className="text-muted-foreground">Update your personal information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Avatar Section */}
          <Card variant="glass" className="lg:col-span-1 h-fit animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="relative mx-auto w-32 h-32 mb-6">
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-full h-full rounded-full object-cover border border-border" />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <User className="w-16 h-16 text-primary-foreground" />
                  </div>
                )}
                <button onClick={handleAvatarClick} className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
              </div>
              <h3 className="font-display font-semibold text-lg">
                {profile.firstName || "Your"} {profile.lastName || "Name"}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {profile.college || "Your College"}
              </p>
            </CardContent>
          </Card>

          {/* Form Section */}
          <Card variant="glass" className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your details below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="bg-muted/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="pl-10 bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="pl-10 bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="college">College</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="college"
                        name="college"
                        value={profile.college}
                        onChange={handleChange}
                        placeholder="Your college"
                        className="pl-10 bg-muted/50 border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Course</Label>
                    <Input
                      id="course"
                      name="course"
                      value={profile.course}
                      onChange={handleChange}
                      placeholder="B.Tech, BCA, etc."
                      className="bg-muted/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      name="year"
                      value={profile.year}
                      onChange={handleChange}
                      placeholder="1st, 2nd, etc."
                      className="bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="bg-muted/50 border-border resize-none"
                  />
                </div>

                <Button variant="gradient" size="lg" className="w-full" type="submit">
                  <Save className="w-5 h-5" />
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

