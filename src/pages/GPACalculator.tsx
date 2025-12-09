import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Plus, Trash2, RotateCcw } from "lucide-react";

interface Subject {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

const gradePoints: Record<string, number> = {
  "O": 10,
  "E": 9,
  "A": 8,
  "B": 7,
  "C": 6,
  "D": 5,
  "F": 0,
};

const grades = ["O", "E", "A", "B", "C", "D", "F"];

const GPACalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: "", credits: 3, grade: "O" },
    { id: 2, name: "", credits: 3, grade: "O" },
    { id: 3, name: "", credits: 3, grade: "O" },
  ]);

  const addSubject = () => {
    const newId = Math.max(...subjects.map(s => s.id)) + 1;
    setSubjects([...subjects, { id: newId, name: "", credits: 3, grade: "O" }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(s => 
      s.id === id ? { ...s, [field]: value } : s
    ));
  };

  const resetCalculator = () => {
    setSubjects([
      { id: 1, name: "", credits: 3, grade: "O" },
      { id: 2, name: "", credits: 3, grade: "O" },
      { id: 3, name: "", credits: 3, grade: "O" },
    ]);
  };

  const calculateGPA = () => {
    const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
    const totalPoints = subjects.reduce((sum, s) => sum + (s.credits * gradePoints[s.grade]), 0);
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  const gpa = calculateGPA();
  const gpaNumber = parseFloat(gpa);

  const getGPAColor = () => {
    if (gpaNumber >= 9) return "text-green-500";
    if (gpaNumber >= 8) return "text-emerald-500";
    if (gpaNumber >= 7) return "text-yellow-500";
    if (gpaNumber >= 6) return "text-orange-500";
    return "text-red-500";
  };

  const getGPAMessage = () => {
    if (gpaNumber >= 9) return "Outstanding! 🎉";
    if (gpaNumber >= 8) return "Excellent Work! ⭐";
    if (gpaNumber >= 7) return "Good Job! 👍";
    if (gpaNumber >= 6) return "Keep Improving! 💪";
    if (gpaNumber >= 5) return "Need More Effort 📚";
    return "Don't Give Up! 🌟";
  };

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">GPA Calculator</h1>
              <p className="text-muted-foreground">Calculate your semester GPA easily</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Section */}
          <div className="lg:col-span-2">
            <Card variant="glass" className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Enter Your Subjects</CardTitle>
                    <CardDescription>Add your subjects with credits and grades</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" onClick={resetCalculator}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Headers */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border">
                  <div className="col-span-5">Subject Name</div>
                  <div className="col-span-3 text-center">Credits</div>
                  <div className="col-span-3 text-center">Grade</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Subject Rows */}
                {subjects.map((subject, index) => (
                  <div 
                    key={subject.id} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="md:col-span-5 space-y-2">
                      <Label className="md:hidden">Subject Name</Label>
                      <Input
                        placeholder={`Subject ${index + 1}`}
                        value={subject.name}
                        onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                        className="bg-muted/50 border-border"
                      />
                    </div>
                    <div className="md:col-span-3 space-y-2">
                      <Label className="md:hidden">Credits</Label>
                      <Select
                        value={subject.credits.toString()}
                        onValueChange={(value) => updateSubject(subject.id, "credits", parseInt(value))}
                      >
                        <SelectTrigger className="bg-muted/50 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((c) => (
                            <SelectItem key={c} value={c.toString()}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-3 space-y-2">
                      <Label className="md:hidden">Grade</Label>
                      <Select
                        value={subject.grade}
                        onValueChange={(value) => updateSubject(subject.id, "grade", value)}
                      >
                        <SelectTrigger className="bg-muted/50 border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g} ({gradePoints[g]} points)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-1 flex justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSubject(subject.id)}
                        disabled={subjects.length === 1}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add Subject Button */}
                <Button
                  variant="outline"
                  onClick={addSubject}
                  className="w-full mt-4 border-dashed"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Subject
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Result Section */}
          <div className="lg:col-span-1">
            <Card variant="gradient" className="sticky top-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center border-4 border-primary/30">
                  <span className={`text-4xl font-display font-bold ${getGPAColor()}`}>
                    {gpa}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Your GPA</h3>
                <p className={`text-lg font-medium ${getGPAColor()}`}>
                  {getGPAMessage()}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Total Credits</span>
                    <span className="font-medium">{subjects.reduce((sum, s) => sum + s.credits, 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subjects</span>
                    <span className="font-medium">{subjects.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grade Scale */}
            <Card variant="glass" className="mt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Grade Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {Object.entries(gradePoints).map(([grade, points]) => (
                    <div key={grade} className="flex justify-between">
                      <span className="text-muted-foreground">{grade}</span>
                      <span className="font-medium">{points} points</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPACalculator;
